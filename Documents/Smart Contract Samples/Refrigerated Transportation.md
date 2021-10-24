# Refrigerated Transportation Sample Application

## Tổng quan

Smart contract về vận chuyển đông lạnh bao trùm một tình huống với việc giám sát bằng IoT. Bạn có thể coi đó là một tình huống vận chuyển chuỗi cung ứng trong đó các quy tắc tuân thủ nhất định phải được đáp ứng trong suốt quá trình vận chuyển. Bên tham gia đầu tiên chỉ định độ ẩm và phạm vi nhiệt độ mà phép đo phải tuân thủ. Tại bất kỳ thời điểm nào, nếu thiết bị thực hiện phép đo nhiệt độ hoặc độ ẩm nằm ngoài phạm vi, trạng thái contract sẽ được cập nhật để cho biết rằng thiết bị không tuân thủ. 

![](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/refrigerated-transportation/media/59c0d3080fb4ad63b1e64c8496645d3b.png)

Tất cả những người tham gia có thể xem trạng thái và chi tiết của contract tại bất kỳ thời điểm nào. Đối tác thực hiện việc vận chuyển sẽ chỉ định đối tác tiếp theo chịu trách nhiệm và thiết bị sẽ nhập dữ liệu nhiệt độ và độ ẩm, dữ liệu này sẽ được ghi vào chuỗi. Điều này cho phép Supply Chain Owner và Supply Chain Observer xác định chính xác đối tác nào không thực hiện các quy định tuân thủ nếu tại bất kỳ điểm nào trong quá trình hoặc các yêu cầu về nhiệt độ hoặc độ ẩm không được đáp ứng. 

## Các vai trò trong ứng dụng

| Tên                    | Mô tả                                                        |
| ---------------------- | ------------------------------------------------------------ |
| InitiatingCounterParty | Người tham gia đầu tiên trong chuỗi cung ứng                 |
| Counterparty           | Bên chịu trách nhiệm cho một sản phẩm đã được giao. Ví dụ: một shipper |
| Device                 | Một thiết bị được sử dụng để theo dõi nhiệt độ và độ ẩm của môi trường chứa (các) hàng hóa đang được vận chuyển. |
| Owner                  | Tổ chức sở hữu sản phẩm đang được vận chuyển. Ví dụ: một nhà sản xuất |
| Observer               | Cá nhân hoặc tổ chức giám sát chuỗi cung ứng. Ví dụ: một cơ quan chính phủ |

## Các trạng thái

| Tên             | Mô tả                                                        |
| --------------- | ------------------------------------------------------------ |
| Created         | Cho biết rằng contract đã khởi tạo và đang trong quá trình theo dõi |
| InTransit       | Cho biết rằng một Counterparty đang có quyền sở hữu và phụ trách các hàng hoá được vận chuyển |
| Completed       | Cho biết sản phẩn đã đến địa điểm dự kiến                    |
| OutOfCompliance | Cho biết rằng các điều khoản đã thoả thuận về nhiệt độ và độ ẩm không được đáp ứng |

## Chi tiết quy trình làm việc

![Refrigerated Transportation Workflow Details](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/refrigerated-transportation/media/73ebae42a69347a7edb762d0f583724a.png)

Biểu đồ chuyển đổi trạng thái sau đây trình bày rõ các luồng có thể có và các chức năng chuyển đổi khác nhau ở mỗi trạng thái. Mỗi người dùng chỉ được phép thực hiện một số hành động nhất định tùy thuộc vào vai trò trong ứng dụng. Vai trò thực thể chỉ ra rằng chỉ người dùng có vai trò trong ứng dụng được chỉ định cho contract cụ thể mới có thể thực hiện các hành động trên contract đó.

Contract này trình bày cách thu thập thông tin đo từ xa và thực thi các chi tiết cụ thể của contract liên quan đến các điều kiện trong quá trình vận chuyển. Cụ thể hơn, nhận và đánh giá dữ liệu nhiệt độ và độ ẩm so với phạm vi chấp nhận được đã chấp thuận. Nếu thiết bị IoT xác định rằng phép đo từ xa nằm ngoài phạm vi chấp nhận được, contract sẽ chuyển sang trạng thái không tuân thủ và  các biện pháp thích hợp có thể được tìm kiếm. Trong happy path được đánh dấu, thiết bị nhập các bài đọc, tuân thủ trong suốt quá trình vận chuyển, trong khi các bên liên quan chuyển giao trách nhiệm cho đến khi quá trình vận chuyển hoàn tất.

## File ứng dụng

[RefrigeratedTransportation.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/refrigerated-transportation/ethereum/RefrigeratedTransportation.json)

[RefrigeratedTransportation.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/refrigerated-transportation/ethereum/RefrigeratedTransportation.sol)
