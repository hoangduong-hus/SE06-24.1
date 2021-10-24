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