# node를 활용한 back-end 구축
### version - v20.18.0
### 개발 이유와 궁금증.
    java+spring boot 를 활용한 백엔드 구축 및 실습을 많이 하였다.
    node+js를 활용한 백엔드 구축과의 차이를 알고 싶어서 하게 되었다.
### 집중 포인트.
    java+spring boot는 아키텍쳐가 존재하여 개발에 용이 하였다.
    구글링 결과 node로 back-end구축시에도 express라는 프레임워크가 존재한다.
    node == jvm..?jdk...? , spring boot== express ..???? 이런 그림이지 않을까 한다.
    js == java 이렇게 이해하면 될것인가..? 
    
### 개발 포인트 
    chat gpt에게 물어본 결과. 패키지 구조를 만들어 주었다.
    패키지 구조 
    2024 -
        node_modules
        src
            - config
            - controller
            - middleware
            - models
            - routes
            - services
            - index.js
        package.json
        REAME.md
        .env
        .gitignore