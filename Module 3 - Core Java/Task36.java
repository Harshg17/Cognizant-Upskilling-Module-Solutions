import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class Task36 {

    public static void main(String[] args) {

        try {

            // Create HTTP Client
            HttpClient client = HttpClient.newHttpClient();

            // Create Request
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://api.github.com/users/octocat"))
                    .GET()
                    .build();

            // Send Request
            HttpResponse<String> response =
                    client.send(
                            request,
                            HttpResponse.BodyHandlers.ofString()
                    );

            // Print Status Code
            System.out.println("Status Code: "
                    + response.statusCode());

            // Parse JSON Response
            String body = response.body();

            JsonObject json =
                    JsonParser.parseString(body)
                              .getAsJsonObject();

            System.out.println("\nGitHub User Details");
            System.out.println("-------------------");

            System.out.println("Username      : "
                    + json.get("login").getAsString());

            System.out.println("Name          : "
                    + json.get("name").getAsString());

            System.out.println("Company       : "
                    + json.get("company").getAsString());

            System.out.println("Location      : "
                    + json.get("location").getAsString());

            System.out.println("Followers     : "
                    + json.get("followers").getAsInt());

            System.out.println("Following     : "
                    + json.get("following").getAsInt());

            System.out.println("Public Repos  : "
                    + json.get("public_repos").getAsInt());

            System.out.println("GitHub URL    : "
                    + json.get("html_url").getAsString());

            System.out.println("Created At    : "
                    + json.get("created_at").getAsString());

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}