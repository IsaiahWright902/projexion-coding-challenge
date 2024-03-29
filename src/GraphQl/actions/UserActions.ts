import { LoginFormDTO } from "../../domain/validators/loginValidators";
import { LOG_IN_USER_MUTATION } from "../mutations/UserMutations";
import { client } from "../../App";
import toast from "react-hot-toast";

export async function LogInUser(formData: LoginFormDTO) {
  return await client
    .mutate({
      mutation: LOG_IN_USER_MUTATION,
      variables: {
        input: {
          email: formData.username,
          password: formData.password,
          clientMutationId: null,
        },
        loginInput2: {
          email: formData.username,
          password: formData.password,
        },
      },
    })
    .then(async (res) => {
      if (res.data.Auth?.loginJwt) {
        localStorage.setItem(
          "token",
          res.data.Auth?.loginJwt?.loginResult?.jwtTokens?.accessToken
        );
        localStorage.setItem(
          "refreshToken",
          res.data.Auth?.loginJwt?.loginResult?.jwtTokens?.refreshToken
        );

        localStorage.setItem(
          "userName",
          res.data?.Auth?.login.accounts[0]?.name
        );

        window.location.replace("/home");
      }
    })
    .catch(() => {
      toast.error("Incorrect username or password. Please try again.");
    });
}
