```bash
mvn clean install -Ddependency-check.skip=true
```
# bifrost-beacon
```bash 
mvn clean install -U -pl bifrost-beacon -am -DskipTests -Ddependency-check.skip=true
mvn clean test -U -pl bifrost-beacon -am
```