for file in src/components/*.tsx; do
  sed -i 's/zinc-900/TMP-50/g' "$file"
  sed -i 's/zinc-800/TMP-100/g' "$file"
  sed -i 's/zinc-700/TMP-300/g' "$file"
  sed -i 's/zinc-600/TMP-400/g' "$file"
  sed -i 's/zinc-500/TMP-400/g' "$file"
  sed -i 's/zinc-400/TMP-500/g' "$file"
  sed -i 's/zinc-300/TMP-700/g' "$file"
  sed -i 's/zinc-200/TMP-800/g' "$file"
  sed -i 's/zinc-100/TMP-900/g' "$file"
  sed -i 's/zinc-50/TMP-950/g' "$file"
  
  sed -i 's/TMP-/zinc-/g' "$file"
done
