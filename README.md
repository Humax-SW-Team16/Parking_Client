
🚗 Turu-Parking
---
## 📍프론트 팀원 소개
|                               [이유정](https://github.com/FordangIT)                                |                                [이민하](https://github.com/moral-life)                               
|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
|                                       fordang0819@gmail.com                                        |                                      leeminam32@gmail.com                                       |                              
|  ![박지호](https://github.com/CYJhub/CYJhub/assets/81136546/42b12c5b-8f9e-4580-984a-fba1ab9ee743)  |  <img src="https://gist.github.com/assets/28076019/5e544695-1ec6-447a-a795-e40cc01b069c" width="420" height="380" /> 


## 📍개요
Turu-Parking은 휴맥스모빌리티의 주차 시설을 손쉽게 찾고 활용할 수 있는 주차장 공유 플랫폼입니다.
서비스는 대중 교통을 이용하거나 차량을 운전하는 사용자들이 주변에 위치한 주차장의 정보를 신속하게 확인하고, 필요한 경우 부가 서비스를 이용할 수 있도록 지원합니다.

---

## 📍주요 기능
| 기능                | 설명                                                            |
|---------------------|-----------------------------------------------------------------|
| 주차장 위치 안내    | Turu-Parking은 사용자가 현재 위치 또는 특정 지역에서 가장 가까운 주차장을 찾을 수 있는 기능을 제공합니다. 지도를 통해 주차장의 위치를 시각적으로 확인할 수 있습니다.   |
| 상세 정보 제공      | 각 주차장에는 주차 요금, 운영 시간 등의 상세 정보가 제공됩니다. 이를 통해 사용자는 필요한 정보를 사전에 파악할 수 있습니다.        |
| 입차 출차 기록 / 이용 내역 및 가격 확인      | 사용자는 Turu-Parking을 통해 주차장 입출차 기록을 쉽게 기록할 수 있습니다. 이를 통해 이용한 주차장에 대한 입차와 출차의 시간을 확인하고, 주차 요금 등을 정확히 파악할 수 있습니다.              |
| 인기도순 주차장 확인 | Turu-Parking은 사용자들의 주변 주차장 검색 기반으로 주차장의 인기도를 확인할 수 있는 기능을 제공합니다. 많은 이용자들이 선택한 주차장이나 자주 이용하는 주차장을 높은 순위로 표시하여 편리하게 선택할 수 있습니다.     |
| 주차장 즐겨찾기      | 사용자는 자주 이용하는 주차장을 즐겨찾기 목록에 추가할 수 있습니다. 이를 통해 향후 더 빠르게 자주 이용하는 주차장을 찾고 예약할 수 있습니다.                  |


## 📍기술 아키텍쳐
![아키텍쳐](https://github.com/humax-sw-team16/Parking_Server/assets/81136546/0a7791be-8476-489d-ba0f-87196cc6269d)



## 📍사용 기술스택
1. Next.js
2. TailwindCSS
3. TypeScript
3. AWS EC2
4. Docker
5. Nginx
6. GitHub Actions

---

## 📍프로젝트 구조
```
📦app
 ┣ 📂components
 ┃ ┣ 📜Carousel.tsx
 ┃ ┣ 📜Footer.tsx
 ┃ ┣ 📜InOut.tsx
 ┃ ┣ 📜KakaoMap.tsx
 ┃ ┗ 📜NavigationBar.tsx
 ┣ 📂context
 ┃ ┗ 📜userLocationContext.tsx
 ┣ 📂customhook
 ┃ ┗ 📜useGeoLocation.tsx
 ┣ 📂list
 ┃ ┗ 📜page.tsx
 ┣ 📂login
 ┃ ┗ 📜page.tsx
 ┣ 📂near_parking
 ┃ ┣ 📜NearParking.tsx
 ┃ ┣ 📜SearchButton.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂oauth
 ┃ ┗ 📂kakao
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┗ 📂login_progress
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┣ 📂parking_detail
 ┃ ┗ 📂[id]
 ┃ ┃ ┗ 📜page.tsx
 ┣ 📂save_parking
 ┃ ┣ 📜SaveButton.tsx
 ┃ ┣ 📜SaveCarousel.tsx
 ┃ ┣ 📜SaveParking.tsx
 ┃ ┣ 📜SaveTotal.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂search
 ┃ ┗ 📜page.tsx
 ┣ 📂admin
 ┃ ┣ 📜AdminCard.tsx
 ┃ ┣ 📜AllRead.tsx
 ┃ ┣ 📜Create.tsx
 ┃ ┣ 📜Delete.tsx
 ┃ ┣ 📜DetailRead.tsx
 ┃ ┣ 📜Update.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂utils
 ┃ ┗ 📜utils.tsx
 ┣ 📜favicon.ico
 ┣ 📜globals.css
 ┣ 📜layout.tsx
 ┣ 📜loading.tsx
 ┣ 📜page.tsx
 ┗ 📜types.ts
```
---

## commit message convention
- feat: 새로운 기능 추가
- fix: 버그 수정
- docs: 문서
- style: 포맷팅, 누락된 세미콜론 등
- refactor: 코드 리팩토링
- test: 테스트 관련
- chore: 기타 수정
- build: 빌드 시스템 또는 외부 의존성에 영향을 주는 변경
- remove: 파일을 삭제
