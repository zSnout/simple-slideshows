echo "Installing Simple Slideshows..."

npm -v > /dev/null && node -v > /dev/null || (
  echo "You don't have Node.JS installed, something you need for this project."
  echo "Aborting..."
  exit 1
)

git -v > /dev/null || (
  echo "You don't have Git installed, something you need for this project."
  echo "Aborting..."
  exit 1
)

echo "Where should we install Simple Slideshows?"
read REPLY
git clone https://github.com/zSnout/simple-slideshows "$REPLY"
cd "$REPLY"
npm install
rm -rf .git
rm install.sh

echo "What will the title of your project be? Ex: My Slideshows"
read project_title

echo "What will the subtitle of your project be? Ex: By (your name here)"
read project_subtitle

echo "# The title is shown on the home page.
TITLE="$project_title"

# The subtitle is shown below the title.
SUBTITLE="$project_subtitle"

# The theme determines the coloring and structure of your slides. The primary
# theme options are slate, zinc, gray, neutral, and stone. Each primary theme
# must be associated with either a light or dark mode.
THEME="slate-light"

# This determines how presentations are sorted on the home page.
# The different sort methods are:
#
#   FILE     Sorts presentations by their file names.
#   TITLE    Sorts presentations by their titles.
SORT_METHOD="TITLE"
" > ./.env

echo "You're done!"

echo ""
echo "Next steps:"
echo "  Run \`npm run dev\` to view your presentations."
echo "  Edit the files in \`decks\` to create new slideshows."
echo "  Run \`npm run build\` to build your slideshows into static HTML."
