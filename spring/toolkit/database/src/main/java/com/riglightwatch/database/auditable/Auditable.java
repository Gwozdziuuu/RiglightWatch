package com.riglightwatch.database.auditable;

import java.time.LocalDateTime;

/**
 * Interface that defines the contract for auditable entities. Implementations should provide
 * mechanisms to track creation, update times, and versioning, typically for use with entity
 * auditing in JPA.
 */
public interface Auditable {

    /**
     * Returns the date and time when the entity was created.
     *
     * @return the creation date and time
     */
    LocalDateTime getCreatedAt();

    /**
     * Returns the date and time when the entity was last updated.
     *
     * @return the last update date and time
     */
    LocalDateTime getUpdatedAt();

    /**
     * Returns the version of the entity, used for optimistic locking.
     *
     * @return the version number
     */
    Integer getVersion();
}