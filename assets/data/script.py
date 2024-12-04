import json
from datetime import datetime

# File paths
input_file_path = "FIFA19.JSON"  # Update with your input file path
output_file_path = "fifaPlayers.json"  # Update with your desired output file path

# Read the file
with open(input_file_path, "r", encoding="utf-8") as file:
    lines = file.readlines()

# Process the lines
players = []
for line in lines:
    player = json.loads(line.strip())  # Parse each line as JSON
    # Update the date
    player["LOADDATE"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    players.append(player)

# Prepare the output structure
output_data = {"players": players}

# Write the output to a new file
with open(output_file_path, "w", encoding="utf-8") as file:
    json.dump(output_data, file, ensure_ascii=False, indent=4)

print(f"Data successfully transformed and saved to {output_file_path}")

