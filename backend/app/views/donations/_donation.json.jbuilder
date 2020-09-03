json.extract! donation, :id, :doador, :tipo, :cidade, :estado, :data, :created_at, :updated_at
json.url donation_url(donation, format: :json)
