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
