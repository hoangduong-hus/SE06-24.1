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
  
