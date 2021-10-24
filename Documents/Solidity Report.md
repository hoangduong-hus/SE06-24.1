# Tìm hiểu về Solidity

## Mở đầu

### Smart Contract là gì?

Smart contract là các chương trình máy tính được lưu trữ và thực thi trên mạng blockchain. Mỗi smart contract bao gồm mã xác nhận các điều kiện được định sẵn mà khi được đáp ứng sẽ kích hoạt kết quả. Bằng cách chạy trên một blockchain phi tập trung thay vì một máy chủ tập trung, các smart contract cho phép nhiều bên đi đến kết quả chung một cách chính xác, kịp thời và chống giả mạo. 

### Solidity là gì?

Solidity là ngôn ngữ lập trình bậc cao (high-level programming language) được phát triển bởi [Ethereum Foundation](https://ethereum.org/) nhằm mục địch phát triển các smart contract.

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
