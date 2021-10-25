# Basic Provenance Sample Application

## Tổng quan

Ứng dụng Basic Provenance thể hiện quy trình làm việc cho một hồ sơ đơn giản về quyền sở hữu hoặc trách nhiệm. Biểu đồ chuyển đổi trạng thái dưới đây cho thấy sự tương tác giữa các trạng thái trong quy trình làm việc này. 

## Các vai trò trong ứng dụng

| Name                   | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| InitiatingCounterParty | Là người đầu tiên tham gia vào chuỗi cung ứng.               |
| Counterparty           | Nhóm được chỉ định trách nghiệm đối với sản phẩm.            |
| Owner                  | Tổ chức sở hữu sản phẩm đang được vận chuyển.                |
| Observer               | Cá nhân hoặc tổ chức giám sát chuỗi cung ứng. Ví dụ, một cơ quan chính phủ. |

## Các trạng thái

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| Created   | Cho biết rằng hợp đồng đã bắt đầu và quá trình theo dõi đang được tiến hành. |
| InTransit | Cho biết rằng một bên đối tác hiện đang sở hữu và chịu trách nhiệm về hàng hóa được vận chuyển. |
| Completed | Cho biết sản phẩm đã đến đích dự kiến.                       |

## Chi tiết quy trình làm việc

![](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/basic-provenance/media/c3d3c6764f6ae1e565c0929d2f2fed48.png)

Một ví dụ về quy trình làm việc của ứng dụng Basic Provenance bắt đầu ở trạng thái Created khi chủ sở hữu muốn bắt đầu quy trình theo dõi quyền sở hữu hoặc trách nhiệm. Chủ sở hữu cũng là InitiatingCounterParty vì chủ sở hữu bắt đầu quy trình theo dõi quyền sở hữu hoặc trách nhiệm. Trạng thái thay đổi thành InTransit bất cứ khi nào một đối tác mới có thể đảm nhận trách nhiệm được xác định. Chủ sở hữu trong vai trò InitiatingCounterParty gọi một hàm để chuyển giao trách nhiệm bằng cách chỉ định một đối tác. Khi đạt đến trạng thái InTransit, đối tác có thể chuyển giao trách nhiệm cho Counterparty khác hoặc chủ sở hữu có thể quyết định hoàn thành việc chuyển giao trách nhiệm và gọi chức năng Completed để đạt đến trạng thái đã hoàn thành.

Happy path được hiển thị trong sơ đồ chuyển đổi theo dõi chủ sở hữu chuyển giao trách nhiệm cho Counterparty một lần và sau đó hoàn thành quy trình làm việc.

## File ứng dụng

[BasicProvenance.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/basic-provenance/ethereum/BasicProvenance.json)

[BasicProvenance.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/basic-provenance/ethereum/BasicProvenance.sol)
