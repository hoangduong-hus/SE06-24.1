# Room Thermostat Sample Application

## Tổng quan

Tình huống về máy điều nhiệt phòng thể hiện quy trình làm việc xoay quanh việc lắp đặt và sử dụng máy điều nhiệt. Trong tình huống này, một người sẽ lắp đặt một máy điều nhiệt cà cho biết người dự định sử dụng nó. Người dùng được chỉ định có thể làm những việc như đặt nhiệt độ mục tiêu và đặt chế độ cho bộ điều nhiệt.

## Các vai trò trong ứng dụng

| Tên       | Mô tả                                        |
| --------- | -------------------------------------------- |
| Installer | Người chịu trách nhiệm lắp đặt bộ điều nhiệt |
| User      | Người sử dụng bộ điều nhiệt                  |

## Các trạng thái

| Tên     | Mô tả                                                   |
| ------- | ------------------------------------------------------- |
| Created | Chỉ ra rằng việc lắp đặt máy điều nhiệt đã được yêu cầu |
| InUse   | Chỉ ra tằng bộ điều nhiệt đang được sử dụng             |

## Chi tiết quy trình làm việc

![Room Thermostat Workflow Details](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/room-thermostat/media/roomthermostat.png)

Bộ điều nhiệt phòng là một quy trình làm việc đơn giản để minh hoạ cách sử dụng kiểu dữ liệu enum. Một khi người cài đặt đã cài đặt và khởi động máy điều nhiệt, người dùng có thể thực hiện hai hành động chính. Là một người dùng, bạn có thể đặt nhiệt độ mục tiêu thành nhiệt độ bạn chỉ định, hoặc bạn có thể đặt chế độ thành một trong bốn chế độ: Tắt, Làm mát, Làm nóng và Tự động.

## File ứng dụng

[RoomThermostat.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/room-thermostat/ethereum/RoomThermostat.json)

[RoomThermostat.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/room-thermostat/ethereum/RoomThermostat.sol)