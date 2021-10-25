# Frequent Flyer Rewards Calculator Application

## Tổng quan

Ứng dụng Tính toán phần thưởng cho khách hàng bay thường xuyên là một ví dụ về việc sử dụng mảng kiểu int có kích thước động trong Azure Blockchain Workbench. Ứng dụng này ràng buộc người đại diện hãng hàng không, khách hàng sử dụng dịch vụ bay và phần thưởng tính theo quãng đường bay cho  khách hàng vào một Hợp đồng thông minh (Smart contract). Mỗi khi khách hàng thực hiện một chuyến bay, quãng đường này sẽ tự động được thêm vào contract, sau đó điểm thưởng sẽ được tính toán dựa vào thông tin quãng đường bay. Mục đích của ví dụ để trình bày cách sử dụng mảng kiểu int động trong việc khai báo trong file cấu hình contract.

## Các vai trò trong ứng dụng 

| Tên                    | Mô tả                                                  |
| ---------------------- | ------------------------------------------------------ |
| Airline Representative | Một người đại diện cho hãng hàng không                 |
| Flyer                  | Một khách hàng bay sử dụng dịch vụ của hãng hàng không |

## Các trạng thái

| Tên                  | Mô tả                                                        |
| -------------------- | ------------------------------------------------------------ |
| Set Flyer and Reward | Đạt được sau khi contract được tạo ra và cài đặt những thông tin đầu tiên của khách hàng |
| Mile added           | Đạt được khi khách hàng sử dụng dịch vụ và quãng đường được thêm vào trong contract |

## Chi tiết quy trình làm việc

![FrequentFlyerRewardsCalculator.PNG](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/frequent-flyer-rewards-calculator/media/FrequentFlyerRewardsCalculator.PNG)

Khi có một khách hàng mới sử dụng dịch vụ hãng hàng không, người đại diện của hãng sẽ tạo một contract để lưu thông tin khách hàng và điểm thưởng. Việc này được thực hiện thông qua hàm SetFlyerAndReward. Sau khi contract được tạo ra, mỗi khi người khách hàng bay kia sử dụng dịch vụ của hãng hàng không, quãng đường sẽ được ghi lại, sau đó điểm thưởng cũng được tính toán lại và update giá trị. Số quãng đường bay trong mỗi lần được thêm vào mảng động. Sau mỗi lần mảng chứa số quãng đưởng thêm một giá trị, tức là hàm MilesAdds được thực thi, điểm thưởng sẽ được tính toán lại.

## File ứng dụng

[FrequentFlyerRewardsCalculator.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/frequent-flyer-rewards-calculator/ethereum/FrequentFlyerRewardsCalculator.json)

[FrequentFlyerRewardsCalculator.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/frequent-flyer-rewards-calculator/ethereum/FrequentFlyerRewardsCalculator.sol)
