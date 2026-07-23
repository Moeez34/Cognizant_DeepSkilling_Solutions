USE dn5_banking;

ALTER TABLE Customers
ADD COLUMN IsVIP BOOLEAN DEFAULT FALSE;

-- Confirm the column was added
DESCRIBE Customers;