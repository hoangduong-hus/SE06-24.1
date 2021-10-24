# Hello Blockchain Sample Application

Tổng quan
---------

Ứng dụng Hello Blockchain thể hiện quy trình làm việc giữa hai bên gửi và phản hồi yêu cầu. Biểu đồ chuyển đổi trạng thái dưới đây cho thấy được sự tương tác giữa các trạng thái trong quy trình làm việc này.

Các vai trò trong ứng dụng
------------------

| Tên | Mô tả                                      |
|------------|-------------------------------------------------------------------------------------------|
| Requestor  |  Bên khởi xướng yêu cầu "Hello blockchain!"  |
| Responder  | Bên đưa ra những phản hồi cho Requestor |


Các trạng thái
-------

| Tên | Mô tả                                           |
|----------|-------------------------------------------------------------------------------------------|
| Request | Trạng thái khi một yêu cầu được đưa ra          |
| Respond  | Trạng thái khi yêu cầu đưa ra được phản hồi lại |

Chi tiết quy trình làm việc
----------------

![](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/hello-blockchain/media/5aba06dd9b98e017f7031946d0187fb7.png)

Cho ví dụ về quy trình làm việc của ứng dụng Hello Blockchain bắt đầu trong trạng thái Request khi một Requestor đưa ra yêu cầu. Và chuyển sang trạng thái Respond khi Responder gửi phản hồi. Cứ thế tiếp tục chuyển sang trạng thái Request khi Requestor đưa ra một yêu cầu khác. Sự chuyển đổi này cứ thế tiếp diễn miễn là Requestor gửi yêu cầu và Responder gửi lại phản hồi.

## File ứng dụng

[HelloBlockchain.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/hello-blockchain/HelloBlockchain.json)

[HelloBlockchain.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/hello-blockchain/HelloBlockchain.sol)
