---
title: "env-cmd error failed to locate ./.env file in gatsby?"
date: "2020-02-16"
source: "https://stackoverflow.com/questions/56301852/env-cmd-error-failed-to-locate-env-file-in-gatsby"
---

Add -f to your package.json file:

    "develop": "env-cmd -f .env.development gatsby develop",