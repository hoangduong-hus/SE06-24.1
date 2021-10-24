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
