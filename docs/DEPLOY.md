# 배포 / 커밋 규칙 (Vercel)

> 온케팅 공통 규칙. repo가 **private + Vercel Hobby**면, **배포되는 HEAD 커밋의 author가 프로젝트 소유자(`onketing.3kim@gmail.com`)여야만** 배포된다. 개인 author 커밋으로 배포 시 "Deployment Blocked — commit author did not have contributing access". Vercel은 **HEAD 커밋 author만** 검사(중간 커밋 무관). git push · deploy hook · CLI 토큰 배포 모두 이 검사를 받음(토큰으로 우회 불가).

## 워크플로 (작업=개인 / 배포=onketing)
- 작업 커밋 = 개인 author(`kdh5998@naver.com`, git 기본) → **개인 잔디 유지**.
- 평소엔 **커밋만 하고 push 하지 않는다** (push = Vercel 배포 트리거).
- 배포할 때만 onketing author 커밋을 얹고 push:
  ```bash
  git deploy   # 이 repo 전용 별칭
  # = git commit --allow-empty --author="onketing <onketing.3kim@gmail.com>" -m "chore: deploy" && git push
  ```
  → 대기 중이던 개인 커밋 + onketing 배포 커밋이 함께 push되고 **HEAD(onketing)** 로 배포됨(READY).

## 잔디(기여 그래프)
- 작업 커밋(개인 author) → **개인 계정 잔디**.
- 배포 커밋(onketing author) → onketing 잔디.

## Claude Code 규칙
- **"커밋해"** → 개인 author로 커밋만. **push 금지.**
- **"배포해 / 푸시해"** → `git deploy`로 onketing 배포 커밋 생성 + push.
- git config(개인)·`git deploy` 별칭은 이 repo에만(repo-local) 적용 — 전역/다른 프로젝트 무영향.

> Vercel 미링크 repo면 배포-author 제약 자체는 해당 없지만, "커밋-only 기본 + 배포 시 onketing 커밋" 규칙은 동일하게 유지한다(온케팅 공통).
