def email_slicer(email):
    username, domain = email.split("@")
    return username, domain

def main():
    print("Email Slicer")
    email = input("Enter your email address: ")
    username, domain = email_slicer(email)
    print(f"Username: {username}")
    print(f"Domain: {domain}")

if __name__ == "__main__":
    main()
