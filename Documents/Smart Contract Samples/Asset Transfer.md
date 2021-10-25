# Asset Transfer Sample

## Tổng quan

The asset transfer smart contract( hành động giao dịch tài sản qua smart contract) bao gồm kịch bản/hợp đồng mua và bán tài sản có giá trị cao,  yêu cầu người kiểm tra và thầm định. Người bán có thể liệt kê tài sản của họ bằng cách khởi tạo một asset transfer smart contract. Người mua của thể đưa ra đề nghị bằng cách thực hiện một hành động trên smart contractvà những bên liên quan có thể kiểm tra hoặc thầm định. Khi việc kiểm tra và thẩm định được thông qua, người mua và bán sẽ xác nhận một lần nữa trước khi giao dịch hoàn tất. Tại mỗi thời điểm, tất cả các bên đều có thế thấy trang thái của giao dịch khi nó được cập nhật.

[![img](https://github.com/Azure-Samples/blockchain/raw/master/blockchain-workbench/application-and-smart-contract-samples/asset-transfer/media/1b35fd81aa303d9030594e43d738a625.jpg)](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/asset-transfer/media/1b35fd81aa303d9030594e43d738a625.jpg)

Có 4 người trong giao dịch demo trên - the seller (người bán) là người khởi xướng và những người khác (buyer (người mua), inspector (người kiểm tra), appraiser (người thẩm định)).

## Các vai trò trong ứng dụng

| Name      | Description                                                  |
| :-------- | :----------------------------------------------------------- |
| Seller    | Người có tài sản muốn giao dịch.                             |
| Buyer     | Người muốn mua tài sản đang được rao bán.                    |
| Inspector | Một người được chọn bởi người mua để kiểm tra tài sản trước khi mua. |
| Appraiser | Một người được chọn bởi người mua để thẩm định tài sản trước khi mua. |

## Các trạng thái

| Name                | Description                                                  |
| :------------------ | ------------------------------------------------------------ |
| Active              | Cho biết tài sản có sẵn để mua                               |
| Offer Placed        | Cho biết người mua muốn mua.                                 |
| Pending Inspection  | Cho biết yêu cầu của người mua với người kiểm tra để xem xét tài sản giao dịch. |
| Inspected           | Cho biết  sự chấp thuân của người kiểm tra.                  |
| Appraised           | Cho biết  sự chấp thuân của người thẩm định.                 |
| Notional Acceptance | Cho biết cả người kiểm tra và thẩm định đều đã chấp thuận    |
| Seller Accepted     | Cho biết người bán chấp nhận đề nghị của người mua.          |
| Buyer Accepted      | Cho biết sự chấp nhận của người mua.                         |
| Accepted            | Cho biết cả người mua và người bán đã đồng ý giao dịch tài sản |
| Terminated          | Cho biết giao dịch đã bị chấm dứt do người bán.              |

## Chi tiết quy trình làm việc

![IMG](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/asset-transfer/media/1a14a6336d8a8b1adfe5c3689ab954b2.png)

Biểu đồ chuyển đổi trạng thái sau đây trình bày rõ các luồng có thể và các chức năng chuyển đổi khác nhau ở mỗi trạng thái. Mỗi người dùng chỉ được phép thực hiện một số hành động nhất định tùy thuộc vào vai trò. Chỉ người có vai trò được chỉ định cụ thể mới có thể thực hiện các hành động trên constract. 

Happy path được đánh dấu hiển thị trong asset transfer contract, seller có thể bán một tài sản và buyer có thể đặt một đề nghị. Hai bên có thể thương lượng và một khi số tiền đề nghị được thống nhất, inspector và appraiser sẽ tham gia. Sau khi họ tham gia, buyer và seller có thể chọn tiếp tục và cuối cùng hoàn thành giao dịch. 