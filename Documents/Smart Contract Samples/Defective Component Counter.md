# Defective Component Counter Application

## Tổng quan

Ứng dụng đếm thành phần bị lỗi là ví dụ trong sử dụng 2 mảng kiểu int có chiều dài cố định trong Azure Blockchain. Ứng dụng này giúp cho những nhà sản xuất có thể kiểm tra số lượng sản phẩm lỗi trong vòng 12 tháng trước.  Mục tiêu chính của ứng dụng ví dụ này  là  trình bày cách sử dụng mảng có chiều dài cố định để khai báo trong tệp cấu hình contract và sự dụng tương tự như contract trong Azure BlockChain Workbench

## Các vai trò trong ứng dụng

| Tên vai trò  | Mô tả                                          |
| ------------ | ---------------------------------------------- |
| Manufacturer | Một người sản xuất các thành phần của sản phẩm |

## Các trạng thái

| Tên trạng thái | Mô tả                                            |
| -------------- | ------------------------------------------------ |
| Create         | Đạt được khi contract được khởi tạo              |
| Compute Total  | Đạt được khi tổng số sản phẩm lỗi được tính toán |

## Chi tiết quy trình hoạt động

![DefectiveComponentCounter.PNG](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/defective-component-counter/media/DefectiveComponentCounter.PNG)

Quá trình hoạt động của ứng dụng này bắt đầu từ việc nhà sản xuất tạo ra một contract dùng để mô tả tổng số sản phẩm lỗi trong vòng 12 tháng trước, Đó là trạng thái Create . Sau đó, nhà sản xuất gọi hàm ComputeTotal để tính toán tổng số sản phẩm lỗi sau khi contract được tạo. Từ đó,  tổng số sản phẩm bị lỗi sẽ được theo dõi và update giá trị mỗi khi hàm ComputeTotal được thực thi.

## File ứng dụng

[DefectiveComponentCounter.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/defective-component-counter/ethereum/DefectiveComponentCounter.json)

[DefectiveComponentCounter.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/defective-component-counter/ethereum/DefectiveComponentCounter.sol)

[DefectiveComponentCounter.zip](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/defective-component-counter/ethereum/DefectiveComponentCounter.zip)
