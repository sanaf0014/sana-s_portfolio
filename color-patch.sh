for file in src/components/*.tsx; do
  sed -i 's/text-zinc-300/text-zinc-100/g' "$file"
  sed -i 's/text-zinc-400/text-zinc-200/g' "$file"
  sed -i 's/text-zinc-500/text-zinc-300/g' "$file"
done
