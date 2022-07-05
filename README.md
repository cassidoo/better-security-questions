Better Security Questions 🔒
===========================

Security questions are pretty boring and stereotypical (like, "what's your mother's maiden name?" and "on what street did you grow up?") which are fine, but... predictable and unsafe.

This is a package of better security questions to make the world safer for eeeeeveryone!

## To install

```bash
npm install better-security-questions
```

## To use

```js
const securityQuestions = require('better-security-questions');

securityQuestions.silly;
> ["Are you even good enough to have imposter syndrome?", ...

securityQuestions.random('silly');
> "When did you stop trying?"
```

## To contribute

Please add questions that you think would be good! Answers to them should be:

- Memorable (it should pop in the user's head right away)
- Unique (there should be one precise answer for the user)
- Unpredictable (something others can't easily guess or research)
- Consistent (it shouldn't change over time)