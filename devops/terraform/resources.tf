resource "aws_dynamodb_table" "gist-annotator-projects-table" {
  name           = "gist-annotator-projects"
  read_capacity  = 20
  write_capacity = 20
  hash_key       = "projectName"

  attribute {
    name = "projectName"
    type = "S"
  }

  ttl {
    attribute_name = "TimeToExist"
    enabled = false
  }

  global_secondary_index {
    name               = "projectNameIndex"
    hash_key           = "projectName"
    write_capacity     = 10
    read_capacity      = 10
    projection_type    = "KEYS_ONLY"
  }

  tags {
    Name        = "gist-annotator-projects-table"
    Environment = "production"
  }
}
