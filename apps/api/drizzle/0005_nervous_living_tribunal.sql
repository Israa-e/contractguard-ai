DROP INDEX "contract_clauses_id_idx";--> statement-breakpoint
CREATE INDEX "contract_clauses_contract_id_idx" ON "contract_clauses" USING btree ("contract_id");