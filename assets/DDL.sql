CREATE TABLE chzzk_user (
    uuid varchar(255) PRIMARY KEY NOT NULL,
    nickname varchar(255) NOT NULL,
    profile_Url varchar(1000) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE chzzk_user_log (
    target_uuid varchar(255) NOT NULL,
    fount_at_uuid varchar(255) NOT NULL,
    new_nickname varchar(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (target_uuid, fount_at_uuid, new_nickname, created_at),
    FOREIGN KEY (target_uuid) REFERENCES chzzk_user(uuid),
    FOREIGN KEY (fount_at_uuid) REFERENCES chzzk_user(uuid)
);