---
title: Temporal study 
description: temporal에 대해 알아보자 01
date: '2023-07-03'
categories:
  - cadence 
  - temporal
published: true
---
## What is Temporal 
- `Uber Cadence`의 fork open service
  -  
- Temporal은 분산 이벤트 워크플로우를 실행하는데 최적화된 완전 관리 서비스 
- 강력한 상태 관리, 워크플로우 재시작 및 오류 처리 기능을 제공 
### More Detail
#### temporal client 
- 워크플로우를 시작하고 상태를 확인하고 작업을 완료
#### temporal server 
- 워크플로우를 저장 관리
- 모니터링

## Who use temporal: UseCase
- the most valuable `mission-critical` workloads in any software company are long-running and tie together multiple services 
### HashiCorp
> - HashiCorp needed to build long-running, reliable, fault-tolerant tasks for the HashiCorp Cloud Platform.
> - Temporal's technology satisfied all of these requirements out of the box and allowed our developers to focus on business logic.
> - Without Temporal's technology, we would've spent a significant amount of time rebuilding Temporal and would've very likely done a worse job.

### Uber

### Netflix 

### Coinbase 

### Stripe

### Checker 
- 미국 범죄기록(?) 조회 플랫폼
- 미국에서 해당 기록을 조회하는데 오래 걸림(~15일)  -> long running
### yum 


## Temporal vs others
#### temporal
- pros:
  - 장기 실행되는 워크플로우에 대한 내결함성, 유지관리, 상태 추적등을 지원
  - 업무 프로세스를 코드로 모델링 -> 복잡한 비지니스 관리하기 쉬움
  - activity와 workflow가 실패하더라도 자동적으로 재시도
- cons:
  - 서버와 클라이언트를 모두 관리 해야 됨으로 운영 부하 
  -> temporal cloud
  - 서버리스 환경에서 사용하기 어려울 수 있음
  -> client에서 풀링을 사용하기 때문에 람다환경과 안맞을 수 있음
#### sqs 
- pros:
  - 분산 시스템에서 메시지를 안정적으로
  - 대기열 메시징에 대해 높은 확장성과 내구성
  - 완전히 관리되는 서비스 -> 인프라 부담 적음
- cons:
  - 복잡한 워크프롤우 관리나 상태 추적 기능이 없음
  - 메시지 처리가 순차적이지 않을 수 있으며, 중복 처리 발생 가능성(멱등성 이슈)  -> 상태 관리 어렵

#### kafka
- pros
  - 실시간 데이터를 스트리밍 처리하는데 특화
  - 대용량 데이터 처리에 대한 높은 처리량과 성능 지원
  - 데이터 레코드에 대한 내구성 & 장애 복구 
- cons
  - 설정과 운영 부담
  - 메시지 삭제 시점 관리, 파티셔닝, 복제 등 세부 설정 필요


#### step function
- pros
  - 복잡한 업무 프로세스를 모델링 & 관리
  - aws와 통합이 잘 되어 있음
  - 인프라 관리 부담이 적음
- cons
  -  비용 부담
  -  복잡한 애플리케이션에 적합하지 않음 -> json 기반 시스템은 복잡한 로직을 효율적으로 표현하기 어려움
 