# Security and SSH

## Configuring SSH for Git
Using SSH keys allows secure authentication with GitHub and other Git servers.

### Generating an SSH Key
```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
Follow the prompts and store the key in the default location.

### Adding SSH Key to SSH Agent
Start the SSH agent:
```sh
eval "$(ssh-agent -s)"
```
Add your key:
```sh
ssh-add ~/.ssh/id_rsa
```

### Adding SSH Key to GitHub
Copy your SSH public key:
```sh
cat ~/.ssh/id_rsa.pub
```
Go to GitHub → Settings → SSH and GPG Keys → Add new key.

### Verifying SSH Connection
To check if the SSH key is set up correctly:
```sh
ssh -T git@github.com
```
You should see a success message.

## Using GPG to Sign Commits
GPG signing adds cryptographic verification to commits.

### Generating a GPG Key
```sh
gpg --full-generate-key
```
Choose RSA (4096 bits) and set an expiration date.

### Listing GPG Keys
```sh
gpg --list-secret-keys --keyid-format=long
```
Copy the key ID.

### Configuring Git to Sign Commits
```sh
git config --global user.signingkey YOUR_KEY_ID
```
Enable commit signing:
```sh
git config --global commit.gpgsign true
```

To sign a commit:
```sh
git commit -S -m "Signed commit"
```

## Enforcing Signed Commits in GitHub
In GitHub repository settings, enable "Require signed commits" to ensure authenticity.

