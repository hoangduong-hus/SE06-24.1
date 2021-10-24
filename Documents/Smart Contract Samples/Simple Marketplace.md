Simple Marketplace Sample Application
====================================================================

Tổng quan
---------

Simple Marketplace là ứng dụng thể hiện quy trình làm việc cho một giao dịch đơn giản giữa chủ sở hữu và người mua trên thị trường giao dịch.  Biểu đồ chuyển đổi trạng thái dưới đây cho thấy được sự tương tác giữa các trạng thái trong quy trình làm việc này. 

Các vai trò trong ứng dụng
------------------
| Tên               | Mô tả                               |
|------------------------|---------------------------------------------------|
|Owner |Chủ sở hửu, là người muốn bán thứ gì đó trên thị trường |
|Buyer |Người muốn mua gì đó từ thị trường |

Các trạng thái
-------

| Tên             | Mô tả                                                        |
|------------------------|---------------------------------------------------|
|ItemAvailable |Cho biết rằng Owner đã cung cấp mặt hàng họ muốn bán trên thị trường |
|OfferPlaced | Cho biết rằng người bán đã đưa ra đề nghị mua mặt hàng do chủ sở hữu liệt kê |
|Accepted |Cho biết chủ sở hữu đã chấp nhận đề nghị của người mua đối với mặt hàng. |

Sơ đồ quy trình làm việc
----------------

 ![](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/simple-marketplace/media/a98d6da0441c39cf0e2d82b2f4faaff3.png)

Một ví dụ về quy trình công việc của ứng dụng Simple Marketplace bắt đầu ở trạng thái ItemAvailable khi Chủ sở hữu cung cấp một mặt hàng để bán bằng cách xác định mô tả và giá của nó. Người mua sau đó có thể đưa ra đề nghị bằng cách xác định giá của sản phẩm mà mình mong muốn. Hành động này khiến trạng thái thay đổi từ ItemAvailable thành OfferPlaced. Bây giờ, nếu chủ sở hữu đồng ý với đề nghị của người mua, thì chủ sở hữu sẽ gọi hàm để chấp nhận đề nghị và quy trình làm việc đạt đến trạng thái kết thúc thành công được biểu thị bằng trạng thái Accepted. Tuy nhiên, nếu chủ sở hữu không hài lòng với đề nghị, thì chủ sở hữu có thể gọi chức năng từ chối đề nghị. Khi bị từ chối, trạng thái chuyển thành ItemAvailable cho biết rằng mặt hàng vẫn được bán. Quá trình chuyển đổi giữa trạng thái ItemAvailable và OfferPlaced có thể tiếp tục cho đến khi chủ sở hữu hài lòng với ưu đãi được đưa ra.

Một happy path được hiển thị trong sơ đồ chuyển đổi theo dõi chủ sở hữu cung cấp một mặt hàng, người mua đưa ra đề nghị và chủ sở hữu chấp nhận đề nghị.

## File ứng dụng

[SimpleMarketplace.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/simple-marketplace/ethereum/SimpleMarketplace.json)

[SimpleMarketplace.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/simple-marketplace/ethereum/SimpleMarketplace.sol)
