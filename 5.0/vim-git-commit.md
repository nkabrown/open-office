# Vim and Git Commit

It's really helpful for the long run to break ourself out of the pattern of always using `git commit -m "Made a new commit"`. But if we just use `git commit` we are left in a Vim editing mode which seems confusing since our mouse no longer works and we probably don't know Vim. The good news is you only need to know a few things about vim to enable yourself to write a thorough and detailed commit message.

When you type `git commit` the Vim editor opens and gives you a chance to write a proper log message. You are in a navigation mode where you can't type in text yet. You can move your cursor around with key strokes.

Arrow keys will work but the hjkl keys are closer to the home row.

```
      k
      ▲
      |
h <--   --> l
      |
      ▼
      j
```

When you've moved your cursor to a place you'd like to add text press the `i` key to enter insert mode and type your text like normal. Type out your log message. You can use `ENTER` to add new lines. When you are finished typing in your text press `ESC` to exit insert mode and enter navigation mode.

If you are happy with your commit message you can press `:wq` to write the message and quit. If you want to abort the commit press `:q!` to quit without saving.

That's all you really need to know to write a nice git commit message with Vim.

* Switch between modes by pressing `i` to enter insert mode and `ESC` to go back to navigation mode.
* Save your message with `:wq` and abort the whole commit with `:q!`.

Some nice background reading about git commit messages can be found at [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) and [5 Useful Tips For a Better Commit Message](https://robots.thoughtbot.com/5-useful-tips-for-a-better-commit-message).

