import csv

# BioSocrates - Read EGFR C21H23NO5
print("BioSocrates S3 Lab - Kargbo 10")
print("Reading EGFR data...")

with open('lab/egfr.csv') as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['Compound_Name']} | {row['Molecular_Formula']} | {row['Molecular_Weight']}")

print("DONE - ONE THRONE 6 LEGENDS!")