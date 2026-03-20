# 在其他项目中使用 fpfe Skills

fpfe monorepo 中的 Skills（位于 `packages/skills/`）可以在其他项目中使用，以增强 Claude/Copilot 的功能。

## 快速开始

### 1. 使用 Git Submodule + 符号链接（推荐方案）

这是最灵活的方案，允许你随时同步最新的 skills。

```bash
# 进入项目目录
cd your-project

# 添加 fpfe 作为 submodule
git submodule add https://github.com/pungfen/fpfe.git vendor/fpfe

# 初始化 submodule
git submodule update --init --recursive

# 创建 .claude/skills 目录
mkdir -p .claude/skills

# 链接所需的 skills
ln -s ../../vendor/fpfe/packages/skills/page-scaffold .claude/skills/page-scaffold

# 提交更改
git add .gitmodules vendor .claude/skills
git commit -m "chore: integrate fpfe skills as git submodule"
```

**优点**：
- ✅ 单一真源（所有项目同步最新版本）
- ✅ 易于维护和更新
- ✅ 支持版本控制

**缺点**：
- ⚠️ 需要手动 `git submodule update` 同步

---

### 2. 本地开发链接（快速集成）

用于本地开发时，快速链接到本地 fpfe 仓库。

```bash
# 在项目中创建 skills 目录
mkdir -p .claude/skills

# 链接到本地 fpfe 仓库
ln -s /path/to/local/fpfe/packages/skills/page-scaffold .claude/skills/page-scaffold
```

**优点**：
- ✅ 快速集成
- ✅ 实时同步本地修改

**缺点**：
- ⚠️ 仅用于本地开发，不能提交 git

---

### 3. 完整复制（独立使用）

复制 skills 到项目中，完全独立维护。

```bash
# 复制 skills
cp -r /path/to/fpfe/packages/skills/page-scaffold your-project/.claude/skills/

# 提交
git add .claude/skills/page-scaffold
git commit -m "feat: add page-scaffold skill"
```

**优点**：
- ✅ 完全独立，无外部依赖
- ✅ 可自由修改

**缺点**：
- ⚠️ 需要手动同步更新

---

## 已有 Skills 说明

### page-scaffold (v2.0.0)

Vue 3 页面脚手架，快速生成列表页和详情页。

**触发词**：
```
生成页面 path为 /admin/user
生成列表页 path为 /admin/config code为CFGFD
生成详情页 path为 /admin/role
```

**详见**: [packages/skills/page-scaffold/README.md](./packages/skills/page-scaffold/README.md)

---

## 添加新 Skill

如果你创建了新的 Skill 或改进了现有 Skill：

1. 在 `packages/skills/` 中创建新目录
2. 按照 [CONTRIBUTING.md](./CONTRIBUTING.md) 的指南组织文件
3. 创建 `SKILL.md` 定义 Skill 的行为
4. 更新 `packages/skills/README.md`
5. 提交 PR

---

## Submodule 常用命令

```bash
# 初始化所有 submodule
git submodule update --init --recursive

# 更新 submodule 到最新版本
git submodule update --remote

# 查看 submodule 状态
git config --file .gitmodules --name-only --get-regexp path

# 移除 submodule
git rm vendor/fpfe
rm -rf .git/modules/vendor/fpfe
git config --file .gitmodules --remove-section submodule.vendor/fpfe
git add .gitmodules
git commit -m "chore: remove fpfe submodule"
```

---

## 常见问题

**Q: Skill 不生效？**
A: 确保：
- ✅ `.claude/skills/page-scaffold/` 目录存在
- ✅ 目录中有 `SKILL.md` 文件
- ✅ VS Code 已重启
- ✅ 对话中使用了正确的触发词

**Q: 如何更新 Skills？**
A: 如果使用 submodule：
```bash
git submodule update --remote
git add vendor
git commit -m "chore: update skills"
```

**Q: 多个项目中如何管理不同版本的 Skill？**
A: 在 fpfe monorepo 中进行版本管理和发布，其他项目通过 git tag 固定版本：
```bash
git submodule add --branch v2.0.0 https://github.com/pungfen/fpfe.git vendor/fpfe
```

---

**文档最后更新**: 2026-03-20
