# Contributing to Code To Create

Thanks for stopping by. This repository is an archive of the website for ACM-VIT's first hackathon (2015). Contributions are welcome when they make the archive easier to run, browse, learn from or keep safe. Good examples are broken-link fixes, accessibility improvements, removing unused template weight, and docs and screenshots. Please don't redesign the site; it's meant to stay a faithful snapshot of 2015.

Please read and follow the [Code of Conduct](https://github.com/abhinav-adtechs/.github/blob/main/CODE_OF_CONDUCT.md). To report a vulnerability, follow the [security policy](https://github.com/abhinav-adtechs/.github/blob/main/SECURITY.md) and do **not** open a public issue.

## Local setup

### Static pages

```bash
git clone https://github.com/abhinav-adtechs/Code-To-Create.git
cd Code-To-Create
python3 -m http.server 8000   # then open http://localhost:8000/
```

### PHP + MySQL pages

You need PHP with `mysqli` and a local MySQL. XAMPP works too, as the original README suggested.

```bash
mysql -u root -e "CREATE DATABASE IF NOT EXISTS hack"
mysql -u root hack < db.sql
php -S localhost:8000         # /registration-page/ and /contact-us/
```

The handlers connect to `localhost` as `root` with an empty password (hard-coded at the top of each PHP file). Only run them locally.

## Where things live

| You want to…           | Look at                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------- |
| Edit the landing page  | `index.html` (assets in `new-assets/` and `wp-content/`)                              |
| Edit the schedule      | `schedule/schedule.html` (styles in `schedule/css/`, source Sass in `schedule/scss/`) |
| Touch registration     | `registration-page/index.php`, schema in `db.sql`                                     |
| Touch the contact form | `contact-us/index.php` (PHP) and `contact-us/contactUs.html` (static)                 |

[`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) has the page map, flows, data model and the list of known issues. Picking one of those issues is a great first contribution.

## Branches and commits

- Branch from `master` with a descriptive name, e.g. `fix/register-name-field`, `chore/prune-template-assets` or `docs/screenshots`.
- Use [Conventional Commits](https://www.conventionalcommits.org/):
  - `fix: save participant name on registration`
  - `fix: use prepared statements in contact handler`
  - `chore: remove unused Material Admin demo assets`
  - `docs: add landing page screenshot`
- Keep subject lines short, in the imperative mood, and focused on _why_.

## Filing issues

- **Bugs:** give the page path, the browser, what you expected and what happened. For broken links or assets, paste the exact `href`/`src`.
- **Enhancements:** explain how the change helps people browsing or running the archive. Check the README roadmap first.

## Pull request checklist

- [ ] The change is scoped to one concern.
- [ ] Pages still load locally with `python3 -m http.server`, and PHP pages with `php -S` if you touched them.
- [ ] No broken links or assets introduced. If you used file paths, check their case on a case-sensitive file system.
- [ ] No credentials, personal data or real participant records added. `db.sql` stays schema-only.
- [ ] Docs updated if behaviour changed (`README.md`, `docs/ARCHITECTURE.md`, `CHANGELOG.md` under _Unreleased_).
- [ ] Screenshots attached for visual changes.

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE). Third-party files in this repo keep their own licenses (see the README).
