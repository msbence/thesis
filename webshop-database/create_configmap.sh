kubectl create configmap database --from-file=postgres.conf --from-file=master.conf --from-file=replica.conf --from-file=pg_hba.conf --from-file=create-replica-user.sh
