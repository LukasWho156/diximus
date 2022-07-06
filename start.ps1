Start-Process -FilePath "npm" -WorkingDirectory ".\client\" -ArgumentList "start"
Start-Process -FilePath "npm" -WorkingDirectory ".\server\" -ArgumentList "run start:test"