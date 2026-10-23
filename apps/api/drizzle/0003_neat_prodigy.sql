DROP INDEX "contracts_user_id_idx";--> statement-breakpoint
CREATE INDEX "contracts_user_id_idx" ON "contracts" USING btree ("user_id");