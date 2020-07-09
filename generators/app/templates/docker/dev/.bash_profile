export TERM=xterm-256color
export PS1="\[\e[32m\][\[\e[m\]\[\e[31m\]\u\[\e[m\]\[\e[33m\]@\[\e[m\]\[\e[32m\]\h\[\e[m\]:\[\e[36m\]\w\[\e[m\]\[\e[32m\]]\[\e[m\]\[\e[32;47m\]\\[\e[m\] "
if [ -x /usr/bin/dircolors ]; then
test -r ~/.dircolors && eval "$(dircolors -b ~/.dircolors)" || eval "$(dircolors -b)"
alias ls='ls --color=auto'
alias grep='grep --color=auto'
alias fgrep='fgrep --color=auto'
alias egrep='egrep --color=auto'
fi

clear

echo "Welcome to the <%= projectName %> container"
echo ""
echo "Install:"
echo "$ npm"
echo ""
echo "Run:"
echo "$ npm run start:dev"
echo ""
echo "Service is located on:"
echo "http://localhost:3000"
echo ""
