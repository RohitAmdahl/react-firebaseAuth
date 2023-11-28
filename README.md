# React + TypeScript + Vite + Firebase

# react-firebaseAuth

A simple React project demonstrating Firebase Authentication using TypeScript and Vite.

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js installed
- Yarn or npm installed
- Firebase project set up

### Installation

1. Clone the repository:

```bash
git clone https://github.com/RohitAmdahl/react-firebaseAuth.git
```

```bash
cd react-firebaseAuth
yarn install

```

Set up Firebase:

```js


 # Create a Firebase project on the Firebase Console.
 - Obtain your Firebase configuration.
 - Update the Firebase configuration in your project (usually in a file like src/    firebaseConfig.ts).
 in firebaseConfig file u should make this variables
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const googleProvider = new GoogleAuthProvider();
```

# login user with formik form onsubmit

```js
onSubmit: async (values, action) => {
  try {
    const userLogin = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const user = userLogin.user;
    if (user) {
      navigate("/demo");
    }
  } catch (error) {
    console.log(error);
  }
  action.resetForm();
},

```

# Login with Google Auth Provider import from firebase signInWithPopup

```js
const signInGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    navigate("/demo");
  } catch (error) {
    console.log(error);
  }
};
```

# Create User with Email/Password import createUserWithEmailAndPassword

# login user with formik form onsubmit

```js
onSubmit: async (values, action) => {
  try {
    const userSignUp = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const user = userSignUp.user;

    if (user) {
      setSuccessMessage("Account created successfully");

      setTimeout(() => {
        setSuccessMessage(null);
      }, 5000);
    }
  } catch (error) {
    console.log(error);
  }
  action.resetForm();
},


```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
