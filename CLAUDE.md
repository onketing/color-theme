# color-theme — Claude Code 지침

## 배포 / 커밋 규칙 (Claude Code — 반드시 준수)

> 배경·전체는 [docs/DEPLOY.md](docs/DEPLOY.md). repo=private + Vercel Hobby면 **배포되는 HEAD 커밋 author가 소유자(`onketing.3kim@gmail.com`)여야만** 배포됨(개인 author는 Blocked, Vercel은 HEAD author만 검사).

- **기본: 커밋만 하고 `push` 하지 않는다** (push=Vercel 배포 트리거). 작업 커밋은 개인 author(`kdh5998@naver.com`, git 기본) → 개인 잔디.
- **"커밋해"** → 개인 author로 커밋만, push 금지.
- **"배포해 / 푸시해"** → onketing author 배포 커밋 + push:
  `git deploy` = `git commit --allow-empty --author="onketing <onketing.3kim@gmail.com>" -m "chore: deploy" && git push`
- git config(개인)·`git deploy` 별칭은 이 repo에만 적용.
