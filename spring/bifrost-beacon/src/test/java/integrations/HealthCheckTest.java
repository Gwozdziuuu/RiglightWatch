package integrations;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import utils.AbstractIntegrationTest;

import static io.restassured.RestAssured.when;

class HealthCheckTest extends AbstractIntegrationTest {

    @Test
    void testStartup() {
        when().
                get("/actuator/health").
                then().
                assertThat().
                statusCode(HttpStatus.OK.value());
    }

}