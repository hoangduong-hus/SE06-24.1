### Function

- #### Cấu trúc hàm

  ```solidity
  function(<tham_số>) {access_modifier} [pure|constant|view|payable] [returns(<kiểu_trả_về>)] {
  	STATEMENT...
  }
  ```

- #### Các Access Modifier

  - `public` - có thể truy cập/sử dụng hàm này ở các contract bên ngoài, những contract con và contract mở rộng
  - `private` - hàm chỉ được truy cập ở bên trong contract, các contract bên ngoài không dùng được các hàm có access modifiers là private
  - `internal` - hàm chỉ được truy cập ở bên trong contract và ở những contract là contract con của nó (kế thừa)
  - `external` - không thể truy cập nội bộ với các bình thường, chỉ có thể truy cập từ bên ngoài. Nếu muốn truy cập nội bộ thì cần dùng từ khóa `this.f`

- #### Tham số

  - ##### Tham số đầu vào

    Tham số đầu vào (input params) được khai báo như cách khai báo 1 biến, và chúng là biến `memory`

    ```solidity
    function f(uint _a, uint _b) {}
    ```

  - ##### Tham số đầu ra

    Tham số đầu ra được khai báo sau từ khóa `returns` của hàm

    ```solidity
    function f(uint _a, uint _b) returns (uint _sum) {
       _sum = _a + _b;
    }
    ```

- #### Constructor

  Constructor là một function trong solidity, được khởi tạo bởi từ khóa `constructor` , được dùng để khởi tạo giá trị các biến của contract, Một số đặc điểm của contructor:

  - Một contract chỉ có 1 constructor
  - Constructor chỉ được thực thi 1 lần khi contract được tạo ra, constructor sẽ khởi tạo giá trị cho các biến của contract
  - Constructor chỉ là một tùy chọn, nếu nó không được định nghĩa, vẫn có 1 constructor default được tạo ra trong contract.
  - Constructor có thể có access modifiers là `internal` hoặc `public`.

  ```solidity
  contract C {
     address owner;
     uint status;
     constructor(uint _status) {
         owner = msg.sender;
         status = _status;
     }
  }
  ```

- #### Gọi hàm

  - Gọi hàm nội bộ contract:

    1 function có thể được 1 function trong cùng 1 contract gọi đến

    ```solidity
    contract C {
        function funA() returns (uint) {
           return 5;
        }

        function FunB(uint _a) returns (uint ret) {
           return funA() + _a;
        }
    }
    ```

  - Gọi hàm từ bên ngoài:

    có nhiều cách để gọi hàm từ bên ngoài:

    - `this.<function_name>` , `<contract_name>.<function_name>` ,

  - `.<function_name>`

  - Một số lưu ý:

    - Có thể thay đổi thứ tự các tham số khi gọi hàm

      ```solidity
      function f(uint a, uint b) {  }

      ```

    function g() {
    f({b: 1, a: 2});
    }

    ````

    - Có thể dùng tham số không có tên

    ```solidity
    function f(uint a, uint) returns (uint) {
      return a;
    }
    ````

- #### Modifier

  - Định nghĩa: function modifier là một function có mục đích thay đổi hành mình của hàm mà nó được đính kèm vào. Ứng dụng chủ yếu của modifier là tự động kiểm tra điều kiện thực thi hàm.

  - Modifiers giúp giảm thiểu code dư thừa, ta có thể dùng modifier vào nhiều hàm khác nhau để kiểm tra những điều kiện giống nhau của contract.

  - Cách dùng modifier:

    ```solidity
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function close() onlyOwner {
        selfdestruct(owner);
    }
    ```

    Cách hoạt động: Trong modifier có kí tự `_;` , Kí tự này có ý nghĩa là đó sẽ là vị trí mà những code trong function dùng modifier sẽ được ghép vào trong - giống như việc ghép code 2 hàm với nhau vậy.

    1 function có thể dùng cùng lúc nhiều modifier, ví dụ:

    ```solidity
    modifier onlyBy(address _account) {
    	require(
    		msg.sender == _account,
    		"Sender not authorized.
    	);
        _;
    }
    modifier onlyAfter(uint _time) {
    	require(
    		now >= _time,
    		"Function called too early."
    	);
        _;
    }
    function disown() public onlyBy(owner) onlyAfter(creationTime + 6 weeks) {
    	delete owner;
    }
    ```

- #### Hàm View

  Là hàm có khai báo từ khóa `view` hoặc `constant` trong câu lệnh khai báo hàm. Nó có ý nghĩa là khi truy cập vào hàm, chúng ta không thể chỉnh sửa giá trị các biến mà chỉ có thể đọc chúng.

  ```solidity
  function f(uint a) view returns (uint) {
      return a * b; // b là một biến storage
  }
  ```

- #### Hàm Pure

  Là hàm có khai báo từ khóa `pure` trong câu lệnh khai báo hàm. Nó có ý nghĩa là chúng ta không được đọc giá trị của biến và cũng không được thay đổi dữ liệu

  ```solidity
  function f(uint a) pure returns (uint) {
      return a * 42;
  }
  ```

- #### Hàm Payable

  Là hàm có khai báo `payable` trong câu lệnh khai báo hàm. Ý nghĩa của hàm này là cho phép nhận `ether` vào trong contract

  ```solidity
  function deposit() payable {
    deposits[msg.sender] += msg.value;
  };
  ```

- #### Fallback Function

  Hàm fallback trong solidity chỉ được biết một lần trong trong một contract, nó không có tên, và cũng không có danh sách tham số đầu vào cũng như không return về giá trị gì. Nó được thực hiện khi không hàm nào trong contract khớp với mã định danh hàm đã cho.

  ```solidity
  function() {
    // Do something
  }
  ```

### Contract

- #### Tạo Contract bằng từ khoá `new`

  Contract trong solidity là khái niệm tương tự với class trong mô hình lập trình hướng đối tượng. Trong contract ta có thể định nghĩa các thuộc tính, các function cụ thể.

  Để tạo 1 contract, ta có thể sử dụng từ khóa `new `

  ```solidity
  contract A {
      function add(uint _a, uint _b) returns (uint) {
          return _a + _b;
      }
  }

  contract C {
      address a;
      function f(uint _a) {
          a = new A();
      }
  }

  ```

- #### Thừa kế Contract

  Solidity hỗ trợ việc kế thừa giữa các contract giống như lập trình hướng đối tượng. Các contract con có thể sử dụng các biến, các hàm của contract cha thông qua từ khóa `super`

  Để khai báo 1 contract kế thừa 1 contract cha khác, ta dùng từ khóa `is`

  ```solidity
  contract owned {
      function owned() { owner = msg.sender; }
      address owner;
  }

  contract mortal is owned {
      function kill() {
          if (msg.sender == owner) selfdestruct(owner);
      }
  }

  contract final is mortal {
      function kill() {
          super.kill(); // Calls kill() of mortal.
      }
  }

  ```

  Trong Solidity cũng hỗ trợ việc đa kế thừa, tức là 1 contract thể kế thừa từ nhiều contract cha.

  ```solidity
  contract A {}
  contract B {}
  contract C is A, B {}
  ```

- #### Contract trừu tượng

  Abtracts Contracts là contract chứa các hàm được định nghĩa cụ thể và cả các hàm không được định nghĩa mà chỉ được khai báo. Abtract contract cũng có những chức năng và cách sử dùng như contract thường.

  Để tạo 1 abstract contract, ta dùng từ khóa `abstract` trước `contract`

  ```solidity
  // SPDX-License-Identifier: MIT
  pragma solidity >=0.6.0 <0.9.0;

  abstract contract Feline {
      function utterance() public pure virtual returns (bytes32);
  }

  contract Cat is Feline {
      function utterance() public pure override returns (bytes32) { return "miaow";}
  }
  ```

  Ở ví dụ trên, A được gọi là một abstract contract

Việc sử dụng abstract contract được sử dụng trong thiết kế mô hình một cách rõ ràng hơn và có sự phân tách.

### Interface

Interface cũng giống với abstract contract, nhưng có một số đặc điểm riêng biệt sau:

- Không chứa các hàm được định nghĩa cụ thể
- Interface không kế thừa từ bất kì contracts, interface nào.
- Không định nghĩa các biến, contrucstor, struct enum trong interface

Để tạo 1 interface, ta dùng từ khóa `interface`

```solidity
pragma solidity ^0.6.0;

interface Token {
    function transfer(address recipient, uint amount);
}
```
