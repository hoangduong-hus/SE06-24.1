# Tìm hiểu về Solidity

## Mở đầu

### Smart Contract là gì?

Smart contract là các chương trình máy tính được lưu trữ và thực thi trên mạng blockchain. Mỗi smart contract bao gồm mã xác nhận các điều kiện được định sẵn mà khi được đáp ứng sẽ kích hoạt kết quả. Bằng cách chạy trên một blockchain phi tập trung thay vì một máy chủ tập trung, các smart contract cho phép nhiều bên đi đến kết quả chung một cách chính xác, kịp thời và chống giả mạo. 

### Solidity là gì?

Solidity là ngôn ngữ lập trình bậc cao (high-level programming language) được phát triển bởi [Ethereum Foundation](https://ethereum.org/) nhằm mục đích phát triển các smart contract.

### Lập trình Solidity

#### Etherium Virtual Machine (EVM)

EVM là một phần trong mạng Ethereum có nhiệm vụ xử lý việc triển khai và thực thi trên smart contract. EVM có trên tất cả các client (node) của mạng Ethereum, hướng đến mục tiêu như là một máy tính phi tập trung toàn cầu.

#### Các môi trường phát triển dành cho Solidity

- ##### Remix IDE

  [Remix](https://remix.ethereum.org/) là một IDE trực tuyến được phát triển bởi Ethereum. Một số tính năng mà Remix IDE mang lại là compile, deploy mã Solidity hay tích hợp testnet cùng với Web3.

  ![Remix IDE](https://i.imgur.com/sLSpjej.png)

- ##### Visual Studio Code + solidity Extension

  Khi phát triển các dự án thực tế, cần phải làm việc với các thành phần khác nhưu front-end và back-end, ta sử dụng [Visual Studio Code](https://code.visualstudio.com/) cùng với extension [solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
  
  ![VS Code solidity extension](https://i.imgur.com/uoMsJZA.png)
### Ví dụ về Solidity

Sau đây là một ví dụ đơn giản nhất về smart contract được viết bằng Solidity

```solidity
pragma solidity ^0.6.0;

contract SimpleStorage{

	// Tạo biến toàn cục storedData
	uint256 storedData;

	// Thay đổi giá trị của storedData
	function set(uint256 x) public{        
		storedData = x;    
	}
	
	// Truy cập và trả về giá trị của storedData
	function get() public view returns (uint256){
		return storedData;    
	}

}
```

## Ngôn ngữ Solidity

### SPDX License Identifier

Niềm tin vào smart contract có thể được thiết lập tốt hơn nếu mã nguồn của chúng có sẵn. Vì việc cung cấp mã nguồn luôn có liên quan đến các vấn đề pháp lý liên quan đến bản quyền, trình biên dịch Solidity khuyến khích việc sử dụng các mã nhận dạng giấy phép SPDX có thể đọc được bằng máy. Mọi source file phải bắt đầu bằng một chú thích cho biết giấy phép của nó:

```solidity
// SPDX-License-Identifier: MIT
```

### Pragma

`pragma solidity ^0.5.2;` sẽ biên dịch với  trình biên dịch phiên bản >= 0.5.2 and < 0.6.0.

### Nhập file

Nhập từ một source file khác

`import "filename";`

`import * as symbolName from "filename";`

`import {symbol1 as alias, symbol2} from "filename";`
### Kiểu dữ liệu

#### Boolean

`bool`: Trả về true hoặc false

Sử dụng:

- Logic: `!` (toán tử phủ định), `&&` (toán tử và), `||` (toán tử hoặc)

- So sánh: `==` (toán tử so sánh bằng), `!=` (phủ định của `==`)

#### Số nguyên

- Không dấu: `uint8 | uint16 | uint32 | uint64 | uint128 | uint256(uint)`
- Có dấu : `int8 | int16 | int32 | int64 | int128 | int256(int)`

Sử dụng:

- So sánh: `<=`, `<`, `==`, `!=`, `>=`,`>`
- Liên quan tới bit: `&`, `|`, `^`
- Toán tử số học: `+`, `-`, `*`, `/`, `%`, `**`, `<<`, `>>`

#### Address

Nhận 1 giá trị kích thước 20 byte

- `balance`

  `<address>.balance (uint256)`: số dư ở địa chỉ

- `transfer` và `send`

  - `<address>.transfer(uint256 amount)`: gửi số lượng Wei đã cho đến Địa chỉ, trả về khi thất bại

  - `<address>.send(uint256 amount) returns (bool)`: gửi số lượng Wei đã cho đến Địa chỉ, trả về false khi thất bại

- `call`

  - `<address>.call(...) returns (bool)`: trả về một cuộc gọi cấp thấp, trả về false khi không thành công

- `delegatecall`

  - `<address>.delegatecall(...) returns (bool)`: trả về cuộc gọi cấp thấp từ hợp đồng này sang hợp đồng khác , trả về false khi bị lỗi

- `callcode`

  - `<address>.callcode(...) returns (bool)`: trả về CALLCODE cấp thấp, trả về false khi không thành công

#### Mảng

- Mảng có thể có kích thước cố định hoặc không
  - `uint [] a;`
  - `uint [7] b;`

#### Enum

```solidity
enum Element{
	fire,
	water,
	wind,
	earth,
	lightning
}
Element e = Element.fire;
```

#### Struct

```solidity
struct People{
	uint old;
	address addr;
	uint favorite_Number;
}
People people;
```

#### Mapping

Khai báo: `mapping(_KeyType => _ValueType)`

Hàm mapping sẽ tìm kiếm giá trị có kiểu dữ liệu là _KeyType và trả về giá trị có kiểu dữ liệu là _ValueType.

_KeyType có thể là bất kỳ loại nào trừ một ánh xạ, một mảng có kích thước động, enum, hoặc một cấu trúc.

_ValueType có thể là bất kỳ kiểu nào bao gồm cả ánh xạ.

### Cấu trúc điều khiển

- #### if else

  Cấu trúc if else sẽ thực thi dòng code trong câu lệnh nếu điều kiện đúng

  ```solidity
  if (expression 1) {
     Statement(s) to be executed if expression 1 is true
  } else if (expression 2) {
     Statement(s) to be executed if expression 2 is true
  } else if (expression 3) {
     Statement(s) to be executed if expression 3 is true
  } else {
     Statement(s) to be executed if no expression is true
  }
  ```

- #### while

  Thực hiện câu lệnh trong while cho tới khi không thoả mãn điều kiện

  ```solidity
  uint i=1;
  while(i<10){
  	i+=1;
  }
  ```

- #### do

  ```solidity
  do {
     Statement(s) to be executed;
  } while (expression);
  ```

- #### for

  ```solidity
  uint counter = 10;
  for(uint i=0;i<counter; i++){
  	//do something	
  }
  ```

- #### break

  ```solidity
  uint i;
  for(i=0;i<10;i++){
  	if(i==5){
  		break;
  	}
  }
  //i nhận giá trị bằng 5
  ```

- #### continue

  ```solidity
  uint j=0;
  for (uint i = 1; i <= 10; i++) {
  	if (i == 5) {
  		continue;
  	}
  	j+=1
  }
  //j=9
  ```

- ### return

  Trả về giá trị của một hàm do mình định nghĩa.

  ```solidity
  contract SimpleStorage {
      uint256 favoriteNumber;
      bool favoriteBool;
      
      struct People {
          uint256 favoriteNumber;
          string name;
      }
  
      function retrieve() public view returns(uint256) {
          return favoriteNumber;
      } 
  }
  ```

- #### ? :

  Cách viết rút gọn của if else.
  
  ```solidity
  uint x=5;
  uint y=6;
  uint z=(x>y) ? x : y
  //tương tự
  uint z;
  if(x>y){
    z=x;
  }else{
    z=y;
  }
  ```
  
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

### Event

Cần có cách giám sát hoạt động của contract sau khi nó được triển khai. Một cách để thực hiện điều này là xem xét tất cả các giao dịch, tuy nhiên điều đó là chưa đủ, vì các lời gọi (message call) giữa các hợp đồng không được ghi lại trên blockchain

```solidity
contract Charity {
    mapping(address => uint) balances;

    function donate() payable public {
        balances[msg.sender] += msg.value;
    }
}

contract Game {
    function buyCoins() payable public {
        charity.donate.value(msg.value / 20)();
    }
}
```

Khi `contract Game` gọi `Charity.donate()`. Giao dịch này sẽ không xuất hiện ra bên ngoài mà có trong giao dịch nội bộ. 

Vì vậy, cần một `event` để ghi lại các sự kiện được phát ra `(emit)` trong hợp đồng. 

```solidity
contract Charity {
    // define event
    event LogDonate(uint _amount);

    mapping(address => uint) balances;

    function donate() payable public {
        balances[msg.sender] += msg.value;
        // emit event
        emit LogDonate(msg.value);
    }
}

contract Game {
    function buyCoins() payable public {
        // 5% goes to charity
        charity.donate.value(msg.value / 20)();
    }
```

Tất cả các giao dịch donate của `Charity` sẽ hiển thị trong danh sách sự kiện của contract

### Library

Library tương tự như Contract nhưng chủ yếu nhằm mục đích sử dụng lại. Library chứa các function mà các Contract khác có thể gọi.

Library  không thể bị phá hủy vì nó được cho là không có trạng thái.

Library không thể có các biến trạng thái

Library không thể kế thừa bất kỳ phần tử nào.

Library không thể được kế thừa.

Code của nó thường được dùng với `delegatecall(callcode)` .

```solidity
library arithmatic {
    function add(uint _a, uint _b) returns (uint) {
        return _a + _b;
    }
}

contract C {
    uint sum;

    function f() {
        sum = arithmatic.add(2, 3);
    }
}
```

### Using - For

UsingA - ForB dùng để đính kèm các hàm thư viện của thư viện A với một kiểu nhất định B. Các hàm này sẽ sử dụng kiểu trình gọi làm tham số đầu tiên của chúng (xác định bằng cách dùng self)

```solidity
library arithmatic {
    function add(uint _a, uint _b) returns (uint) {
        return _a + _b;
    }
}

contract C {
    using arithmatic for uint;
    
    uint sum;
    function f(uint _a) {
        sum = _a.add(3);
    }
}
```

```solidity
pragma solidity ^0.5.0;

library Search {
   function indexOf(uint[] storage self, uint value) public view returns (uint) {
      for (uint i = 0; i < self.length; i++)if (self[i] == value) return i;
      return uint(-1);
   }
}
contract Test {
   using Search for uint[];
   uint[] data;
   constructor() public {
      data.push(1);
      data.push(2);
      data.push(3);
      data.push(4);
      data.push(5);
   }
   function isValuePresent() external view returns(uint){
      uint value = 4;      
      
      //Now data is representing the Library
      uint index = data.indexOf(value);
      return index;
   }
}
```

### Xử lý lỗi

`assert(bool condition)`: ném nếu điều kiện không được đáp ứng - được sử dụng cho các lỗi nội bộ. 

`require(bool condition)`: ném nếu điều kiện không được đáp ứng - được sử dụng cho các lỗi trong đầu vào hoặc các thành phần bên ngoài. 

`revert()`: hủy bỏ việc thực thi và hoàn tác các thay đổi trạng thái

```solidity
pragma solidity ^0.5.0;

contract Vendor {
   address public seller;
   modifier onlySeller() {
      require(
         msg.sender == seller,
         "Only seller can call this."
      );
      _;
   }
   function sell(uint amount) public payable onlySeller { 
      if (amount > msg.value / 2 ether)
         revert("Not enough Ether provided.");
      // Perform the sell operation.
   }
}
```

Contract sẽ cho đầu ra:

```solidity
0x08c379a0															// Function selector for Error(string)
0x0000000000000000000000000000000000000000000000000000000000000020	// Data offset
0x000000000000000000000000000000000000000000000000000000000000001a	// String length
0x4e6f7420656e6f7567682045746865722070726f76696465642e000000000000	// String data
```

### Các loại biến toàn cục

- #### Các biến Block

  `block.blockhash(uint blockNumber) returns (bytes32)` :

  `block.coinbase (address)` : Địa chỉ của người khai thác khối hiện tại

  `block.difficulty (uint)` : Khó khăn của khối hiện tại

  `block.gaslimit (uint)` : Gaslimit của khối hiện tại
  `block.number (uint)` : Số khối hiện tại

  `block.timestamp (uint)` : Lấy ra timestamp của khối hiện tại theo thời gian Unix (Thời gian Unix, là hệ thống nhằm diễn tả một điểm trên trục thời gian, theo trục thời gian nó sử dụng số giây kể để xác định thời điểm, với điểm gốc từ thời điểm 00:00:00 ngày 1/1/1970 (UTC).)
  `now (uint)` :Timestamp của khối hiện tại 

- #### Các biến giao dịch

  `msg.data (bytes)`: Hoàn chỉnh calldata

  `msg.gas (uint)`: Gas còn lại

  `msg.sender (address)`: Người gửi tin nhắn ( cuộc gọi hiện tại )

  `msg.sig (bytes4)`: 4 byte đầu tiên của calldata (mã định danh hàm)

  `msg.value (uint)`: Số lượng wei gửi cùng tin nhắn

  `tx.gasprice (uint)`: Gía gas của giao dịch

  `tx.origin (address)`: Người gửi của giao dịch (full call chain)

- #### Các hàm toán học và mã hoá

  `addmod(uint x, uint y, uint k) returns (uint)`: tính toán (x + y) % trong đó phép công được thực hiện với độ chính xác tùy ý và không bao quanh ở  2**256.

  `mulmod(uint x, uint y, uint k) returns (uint)`: tính toán (x * y) % trong đó phép nhân được thực hiện với độ chính xác tùy ý và không bao quanh ở  2**256.

  `keccak256(...) returns (bytes32)`: tính toán Ethereum-SHA-3 (Keccak-256) hash của các biến số (tightly packed)

  `sha256(...) returns (bytes32)`: tính toán SHA-256 hash của các biến số (tightly packed)

  `sha3(...) returns (bytes32)`: tên gọi khác cho keccak256

  `ripemd160(...) returns (bytes20)`: tính toán RIPEMD-160 hash của các biến số (tightly packed)

  `ecrecover(bytes32 hash, uint8 v, bytes32 r, bytes32 s) returns (address)`: khôi phục địa chỉ liên kết với khóa công khai từ chữ kí elliptic curve hoặc trả về 0 khi có lỗi

- #### Các hàm liên quan đến Contract

  `this (current contract’s type)`: Contract hiện tại, có thể chuyển thành address.

  `selfdestruct(address recipient)`: Hủy contract hiện tại, gửi tiền đến address đã cho.

  `suicide(address recipient)`: Tên gọi khác của `selfdestruct`. Sẽ sớm không được dùng nữa.