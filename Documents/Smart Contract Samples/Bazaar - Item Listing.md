# Bazaar - Item Listing Sample Application

## Tổng quát

Các giai đoạn của Bazaar - Item Listing cho thấy một ví dụ về cách một ứng dụng có thể có nhiều quy trình làm việc và cách một hợp đồng có thể triển khai một hợp đồng khác. Ứng dụng Bazaar - Item Listing có hai quy trình làm việc. Quy trình làm việc đầu tiên ràng buộc hai người thông qua smart contract. Quy trình làm việc thứ hai cho phép hai người bị ràng buộc bởi smart contract liệt kê các mặt hàng có thể được mua và bán giữa họ. Kết quả của việc mua và bán một mặt hàng, chẳng hạn như cập nhật số dư của người dùng, từ quy trình làm việc thứ hai được phản ánh trong quy trình làm việc đầu tiên. 

## Các vai trò trong ứng dụng

| Name             | Description                                                  |
| ---------------- | :----------------------------------------------------------- |
| BazaarMaintainer | Một người chịu trách nhiệm cho việc ghép nối hoặc ràng buộc hai người qua smart contract. |
| Party            | Người tham gia vào ứng dụng. Một người trong vai trò bên có thể là một phần của một hoặc nhiều ràng buộc, trong đó có thể được ghép nối với nhiều bên thông qua smart contracts. |

## Các giai đoạn làm việc của Bazaar

| Name                 | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| PartyProvisioned     | Chỉ ra rằng 2 người trong cuộc giao dịch đã được cung cấp cùng với số tiền dư của họ. |
| ItemListed           | Cho biết một vật phẩm đã được liệt kê trong bazaar.          |
| CurrentSaleFinalized | Cho biết doanh thu của một vật phẩm đã được liệt kê trong bazaar. |

## Trạng thái của các vật phẩm

| Name          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| ItemAvailable | Cho biết trạng thái của một vật phẩm có sẵn để mua.          |
| ItemSold      | Cho biết trạng thái của một vật phẩm có sẵn nhưng đã được bán. |

## Chi tiết quy trình làm việc

![](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/bazaar-item-listing/media/bazaaritemlisting.png)

Một phiên bản của ứng dụng Bazaar - Item Listing trước tiên tạo ra ràng buộc giữa hai người dùng (ở đây là Party A và Party B). Hai người dùng bị ràng buộc bởi một hợp đồng thông minh theo dõi số dư của họ (ở đây Số dư Party A và Số dư Party B). Sau khi smartcontract được tạo và triển khai trên chuỗi, bản sao sẽ đạt đến trạng thái PartyProvisioned.

Party A và Party B,  bị ràng buộc bởi smart contract, bây giờ có thể bắt đầu mua và bán các mặt hàng giữa họ. Một bên có thể liệt kê mục bằng cách gọi hàm chuyển tiếp List Item trong Workflow 1. List Item sách nhận vào tên mục và giá mục và gọi phương thức khởi tạo của Workflow 2 với tập hợp các đối số chính xác. Việc hoàn thành thành công List Item sẽ tạo một phiên bản của dòng công việc thứ hai và đặt phiên bản dòng công việc đó vào trạng thái ItemAvailable. Bạn có thể mua vật phẩm có sẵn bằng chức năng Buy Item. Chức năng Buy Item kiểm tra xem người mua có đủ số dư hay không và tiến hành mua hàng bằng cách cập nhật số dư của các bên. Bây giờ, vì địa chỉ của hợp đồng mẹ đã được biết, nên một lệnh gọi trực tiếp có thể được thực hiện đến chức năng Cập nhật Số dư của hợp đồng mẹ. Chức năng Cập nhật số dư cập nhật số dư của hai bên một cách thích hợp. Việc thực thi thành công sẽ đặt trường hợp dòng công việc thứ hai ở trạng thái Mặt hàng đã bán và trường hợp dòng công việc đầu tiên ở trạng thái Current Sale Finalized.

Chức năng List Item sách luôn có sẵn để tạo các mục mới và do đó là các phiên bản mới của quy trình làm việc thứ hai. Chức năng List Item mặt hàng khả dụng cho cả hai bên để một trong hai bên có thể liệt kê một mặt hàng để bán. Xin lưu ý rằng quy trình làm việc đầu tiên không có trạng thái cuối cùng chỉ ra rằng hai bên có thể tiếp tục mua và bán nhiều hơn một mặt hàng trong Bazaar. Tuy nhiên, dòng công việc thứ hai có trạng thái cuối cùng chỉ ra rằng một phiên bản của quy trình thứ hai ghi lại việc bán chính xác một mặt hàng giữa hai bên.

File ứng dụng

[BazaarItemListing.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/bazaar-item-listing/ethereum/BazaarItemListing.json)

[BazaarItemListing.zip](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/bazaar-item-listing/ethereum/BazaarItemListing.zip) : File này chứa 3 file Solidity

- BazaarItemListing.sol -  File này chứa code cho Workflow 1 trong sơ đồ, kết nối hai người dùng trong một contract
- ItemListing.sol -  File này chứa code cho Workflow 2 trong sơ đồ, mua và bán một vật phẩm.
- WorkbenchBase.sol - Filel này chứa lớp Workbench base và các định nghĩa event.