# @fpfe/skills

个人前端工具库中的 AI Skills 集合。这些 skills 用于 Claude/Copilot 中，加速开发效率。

## 📚 包含的 Skills

| Skill | 版本 | 描述 |
|-------|------|------|
| [page-scaffold](./page-scaffold/) | v2.0.0 | Vue 3 页面脚手架 - 快速生成列表/详情页 |

## 🚀 在其他项目中使用

### 方式 1：通过 fpfe 的 Git Submodule + 符号链接（推荐）

```bash
# 在项目根目录
cd your-project

# 添加 fpfe 作为 submodule
git submodule add https://github.com/pungfen/fpfe.git vendor/fpfe

# 创建 skills 目录
mkdir -p .claude/skills

# 链接 skills
ln -s ../../vendor/fpfe/packages/skills/page-scaffold .claude/skills/page-scaffold

# 提交
git add .gitmodules vendor/.claude/skills/
git commit -m "chore: add fpfe skills via submodule"
```

### 方式 2：本地开发时符号链接

```bash
# 在项目中
mkdir -p .claude/skills
ln -s /path/to/fpfe/packages/skills/page-scaffold .claude/skills/page-scaffold
```

### 方式 3：完整复制

```bash
cp -r fpfe/packages/skills/page-scaffold your-project/.claude/skills/
```

## 📖 使用示例

在 VS Code 中直接输入以下触发词：

```
生成页面 path为 /admin/user
生成列表页 path为 /admin/config code为CFGFD
生成详情页 path为 /admin/role
```

## 📁 目录结构

```
skills/
├── page-scaffold/          # 页面脚手架 skill
│   ├── SKILL.md           # Skill 执行规则
│   ├── README.md          # 使用说明
│   ├── CHANGELOG.md       # 版本历史
│   ├── templates/         # 通用模板
│   │   ├── list.vue       # 列表页通用模板
│   │   └── detail.[id].vue # 详情页通用模板
│   └── examples/          # 使用示例
├── package.json           # Monorepo 配置
└── README.md             # 本文件
```

## 🔄 更新时间线

首次发布于 fpfe monorepo 中（2026-03-20）

详见 [page-scaffold CHANGELOG](./page-scaffold/CHANGELOG.md)
