# Ping Pong Game Application for Azure Blockchain Workbench

## Overview

Ping Pong game là một ví dụ sử dụng nhiều workflows trong Azure Blockchain Workbench. Trò chơi này giới thiệu các một contract tạo một contract khác, cách một hàm contract có thể gọi đến một hàm contract khác.

## Các vai trò trong ứng dụng

| Name    | Description            |
| ------- | ---------------------- |
| Starter | Bắt đầu ping pong game |

## Các trạng thái của quy trình Starter

| Name             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Game Provisioned | Trạng thái sau khi contract được tạo                         |
| PingPonging      | Trạng thái khi trò chơi bắt đầu và  the ping pong "player" contract tham gia. |
| Game Finished    | Trạng thái khi trò chơi kết thúc                             |

## Các trạng thái của quy trình Player

| Name                    | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| Pingpong Player Created | Trạng thái sau khi contract được tạo và một "player" được tạo từ Starter contract. |
| PingPongingg            | Trạng thái khi trò chơi bắt đầu và  the ping pong "player" contract tham gia. |
| Game Finished           | Trạng thái khi trò chơi kết thúc                             |

## Chi tiết quy trình làm việc

![IMG](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/ping-pong-game/media/PingPongGame.PNG)

Ping pong game bắt đầu khi Starter workflow được tạo. Điều này khởi tạo Player workflow  và "player" cũng được tạo. Để bắt đầu,  Starter role bắt đầu chơi bóng và nhập số lần đánh bóng. Khi đủ số lượng đã định thì trò chơi kết thúc.

## File ứng dụng

[PingPongGame.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/ping-pong-game/ethereum/PingPongGame.json)

[PingPongGame.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/ping-pong-game/ethereum/PingPongGame.sol)
