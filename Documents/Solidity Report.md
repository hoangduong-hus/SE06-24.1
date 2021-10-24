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
  
