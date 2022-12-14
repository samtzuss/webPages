## WhatsApp Business 平台內部部署 API
https://developers.facebook.com/docs/whatsapp/on-premises

services:
  dbupgrade:
    image: docker.whatsapp.biz/coreapp:v${WA_API_VERSION:-2.21.3}

## postman collection
https://www.postman.com/meta?fbclid=IwAR1dvjx3tp-Guaqa_pWCWuaKsk4qn4eowSD61B4_HTChPU3VExG3VSEZey4

documents
https://documenter.getpostman.com/view/13382743/UVC2F8Rm?fbclid=IwAR3195oIv7MKaTDtGKU-d0h0EqLyUbCBMyaXdpYs3dYYnqI8an2yItrvcrU

api on postman

## meta for developers
https://developers.facebook.com/apps/615795933677891/whatsapp-business/wa-dev-quickstart/?business_id=167814799272912
whatsapp > 開始設定 > 開始使用此API > 暫時token

## 取得永久權杖
whatsapp > 設定 > 永久權杖
https://developers.facebook.com/docs/whatsapp/business-management-api/get-started#1--acquire-an-access-token-using-a-system-user-or-facebook-login

## access token
A System User access token created in the WhatsApp Business Accounts tab of the Business Manager , to access assets for a business manager
https://www.facebook.com/business/help/503306463479099?id=2190812977867143

前往企業管理平台設定。
點擊工作人員底下的系統工作人員。
點擊新增系統用戶。
為系統用戶命名，然後點擊建立系統用戶。
指派粉絲專頁、廣告帳號和目錄等資產。
點擊產生新存取權杖。
選擇應用程式及權限，然後點擊產生存取權杖。
複製並儲存存取權杖。

new token:
EAAIwECnhiUMBAAJM2GWdwpXkhsOApVesZB3ViQKe0qgbZAc9ZCwx8MiQOvidYPBHFUeQFgyZCwey1rdo1B7rKzMu2ZB5CSZA5W2dfUmej1AUFJy3Ro4sSRVZAJhc1nQHDZATMb6wEZBI4xpW12Ceui84jCVMKZBzZCerV4RWeeBMsWUPVOAvkjOE2qQ
