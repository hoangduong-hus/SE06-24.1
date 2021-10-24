Digital Locker Sample Application
==================================================================

Tổng quan
---------

Ứng dụng Digital Locker thể hiện quy trình chia sẻ các tệp bị khóa kỹ thuật số trong đó chủ sở hữu tệp kiểm soát quyền truy cập vào các tệp này. Chúng tôi minh họa Digital Locker bằng cách nêu lên ví dụ về chủ sở hữu thực hiện kiểm soát truy cập vào tài liệu của họ do ngân hàng nắm giữ.  Biểu đồ chuyển đổi trạng thái dưới đây cho thấy được sự tương tác giữa các trạng thái trong quy trình làm việc này. 

Các vai trò trong ứng dụng
------------------

| Tên                   | Mô tả                                           |
| --------------------- | ----------------------------------------------- |
| Owner                 | Chủ sở hữu của digital asset.                   |
| BankAgent             | Người trông coi digital asset.                  |
| ThirdPartyRequestor   | Người yêu cầu quyền truy cập vào digital asset. |
| CurrentAuthorizedUser | Người được phép truy cập vào digital asset.     |

Các trạng thái
-------

| Yêu cầu               | Cho biết yêu cầu của chủ sở hữu để cung cấp digital asset.   |
| --------------------- | ------------------------------------------------------------ |
| DocumentReview        | Cho biết ngân hàng đã xem xét yêu cầu của chủ sở hữu.        |
| AvailableToShare      | Cho biết ngân hàng đã tải lên digital asset và digital asset có sẵn để chia sẻ |
| SharingWithThirdParty | Cho biết rằng chủ sở hữu đang xem xét yêu cầu của bên thứ ba để truy cập vào digital asset. |
| Terminated            | Cho biết việc chấm dứt chia sẻ digital asset.                |

Sơ đồ quy trình làm việc
-----------------

![](https://raw.githubusercontent.com/Azure-Samples/blockchain/master/blockchain-workbench/application-and-smart-contract-samples/digital-locker/media/3540f1547a7326c32df839411dfbf0b8.png)

Một ví dụ về quy trình làm việc của ứng dụng Digital Locker bắt đầu ở trạng thái Requested khi Chủ sở hữu yêu cầu ngân hàng của họ bắt đầu quy trình chia sẻ tài liệu do ngân hàng nắm giữ. Một BankAgent khiến trạng thái chuyển sang DocumentReview bằng cách gọi hàm BeginReviewProcess cho biết rằng quá trình xem xét yêu cầu đã bắt đầu. Sau khi xem xét xong, BankAgent sẽ cung cấp tài liệu bằng cách tải tài liệu lên. Nói thêm về điều này một chút, trạng thái AvailableToShare có thể được coi là trạng thái vĩnh viễn. Khi tài liệu có sẵn để chia sẻ, tài liệu có thể được chia sẻ với bên thứ ba mà chủ sở hữu đã xác định hoặc bất kỳ người yêu cầu ngẫu nhiên nào của bên thứ ba. Nếu chủ sở hữu chỉ định người yêu cầu bên thứ ba, thì trạng thái sẽ chuyển từ AvailableToShare thành SharingWithThirdParty. Nếu người yêu cầu bên thứ ba ngẫu nhiên cần quyền truy cập vào tài liệu, thì người yêu cầu bên thứ ba đó trước tiên yêu cầu quyền truy cập vào tài liệu. Khi đó, chủ sở hữu có thể chấp nhận yêu cầu và cấp quyền truy cập hoặc từ chối yêu cầu. Nếu chủ sở hữu từ chối yêu cầu đối với người yêu cầu bên thứ ba ngẫu nhiên, thì trạng thái sẽ quay trở lại AvailableToShare. Nếu chủ sở hữu chấp nhận yêu cầu cho phép yêu cầu ngẫu nhiên của bên thứ ba truy cập vào tài liệu thì trạng thái sẽ chuyển sang SharingWithThirdParty. Sau khi người yêu cầu bên thứ ba hoàn tất tài liệu, họ có thể giải phóng khóa cho tài liệu và trạng thái chuyển sang AvailableToShare. Chủ sở hữu cũng có thể khiến trạng thái chuyển từ SharingWithThirdParty sang AvailableToShare khi họ thu hồi quyền truy cập từ người yêu cầu bên thứ ba. Cuối cùng, tại bất kỳ thời điểm nào trong quá trình chuyển đổi này, bên ngân hàng có thể quyết định chấm dứt việc chia sẻ tài liệu sau khi tài liệu có sẵn để chia sẻ.

Happy path được hiển thị trong sơ đồ chuyển đổi trạng thái theo dõi đường dẫn mà chủ sở hữu cấp quyền truy cập cho bên thứ ba ngẫu nhiên.

## File ứng dụng

[DigitalLocker.json](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/digital-locker/ethereum/DigitalLocker.json)

[DigitalLocker.sol](https://github.com/Azure-Samples/blockchain/blob/master/blockchain-workbench/application-and-smart-contract-samples/digital-locker/ethereum/DigitalLocker.sol)
