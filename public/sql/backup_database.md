# Database Backup

## Introduction
Backing up a database is crucial to prevent data loss and ensure recoverability in case of system failures or accidental deletions.

## MySQL Database Backup
### Backup Using `mysqldump`
```sh
mysqldump -u root -p company > company_backup.sql
```

### Restore from Backup
```sh
mysql -u root -p company < company_backup.sql
```

## PostgreSQL Database Backup
### Backup Using `pg_dump`
```sh
pg_dump -U postgres -F c -b -v -f company_backup.dump company
```

### Restore from Backup
```sh
pg_restore -U postgres -d company -v company_backup.dump
```

## SQL Server Database Backup
### Backup Using T-SQL
```sql
BACKUP DATABASE company
TO DISK = 'C:\backups\company_backup.bak'
WITH FORMAT, INIT, NAME = 'Full Backup of Company Database';
```

### Restore from Backup
```sql
RESTORE DATABASE company
FROM DISK = 'C:\backups\company_backup.bak'
WITH REPLACE;
```

## Automating Backups
To schedule regular backups, use `cron` (Linux) or Task Scheduler (Windows) to execute backup commands at set intervals.
